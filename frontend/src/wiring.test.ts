import { describe, expect, it, vi } from "vitest";

const { activateProvider } = vi.hoisted(() => ({ activateProvider: vi.fn() }));
vi.mock("@soksak/soksak-kit-plugin-terminal", () => ({
  activateProviderTerminalPlugin: activateProvider,
}));

import { activate } from "./index";

describe("Alacritty terminal plugin wiring", () => {
  it("selects the Alacritty provider", () => {
    const app = {} as Parameters<typeof activate>[0]["app"];
    activate({ app, subscriptions: [] });
    expect(activateProvider).toHaveBeenCalledWith(app, [], {
      pluginId: "soksak-plugin-terminal-alacritty", engineId: "alacritty",
      providerUnit: "terminal-alacritty", programId: "terminal-alacritty",
    });
  });
});
