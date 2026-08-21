import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const manifest = JSON.parse(readFileSync(new URL("../../soksak-unit.json", import.meta.url), "utf8"));

describe("plugin unit manifest", () => {
  it("declares this plugin and only public runtime boundaries", () => {
    expect(manifest).toEqual({
      spec: "soksak-spec-unit@0.0.1",
      kind: "plugin",
      id: "soksak-plugin-terminal-alacritty",
      version: "0.0.1",
      dependencies: [
        { kind: "sidecar", id: "soksak-sidecar-pty", version: "0.0.1" },
        { kind: "sidecar", id: "soksak-sidecar-terminal-alacritty", version: "0.0.1" },
      ],
      implements: [{ id: "soksak-spec-plugin-terminal", version: "0.0.1" }],
      consumes: [
        { name: "pty", contract: { id: "soksak-spec-sidecar-pty", version: "0.0.1" } },
        { name: "state", contract: { id: "soksak-spec-sidecar-terminal", version: "0.0.1" } },
      ],
      entrypoints: [{ role: "plugin", path: "plugin.json" }],
    });
  });
});
