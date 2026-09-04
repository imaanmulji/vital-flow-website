import { spawnSync } from "node:child_process";
import { extname } from "node:path";

const unsafeShellToken = /[&|<>^\r\n]/;

function resolveWindowsCommand(command) {
  const extension = extname(command).toLowerCase();
  if ([".exe", ".com"].includes(extension)) return { command, shell: false };
  if ([".cmd", ".bat"].includes(extension)) return { command, shell: true };
  const located = spawnSync("where.exe", [command], { encoding: "utf8", shell: false, timeout: 5000 });
  const paths = (located.stdout ?? "").split(/\r?\n/).filter(Boolean);
  const firstRunnable = paths.find((path) => [".exe", ".com", ".cmd", ".bat"].includes(extname(path).toLowerCase()));
  if (firstRunnable) {
    const firstExtension = extname(firstRunnable).toLowerCase();
    if ([".exe", ".com"].includes(firstExtension)) return { command: firstRunnable, shell: false };
    return { command, shell: true };
  }
  return { command, shell: false };
}

export function spawnPortable(command, args = [], options = {}) {
  const resolved = process.platform === "win32" ? resolveWindowsCommand(command) : { command, shell: false };
  if (resolved.shell && ([command, ...args].some((token) => unsafeShellToken.test(String(token))))) {
    throw new Error(`Unsafe shell metacharacter in command requiring a Windows shell: ${command}`);
  }
  return spawnSync(resolved.command, args, { ...options, shell: resolved.shell });
}
