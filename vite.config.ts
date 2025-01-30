import { URL, fileURLToPath } from "node:url";
import { configDefaults } from "vitest/config";

import { liveDesigner } from "@pinegrow/vite-plugin";
import presetIcons from "@unocss/preset-icons";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";
import nightwatchPlugin from "vite-plugin-nightwatch";
import vueDevTools from "vite-plugin-vue-devtools";

// https:/ / vite.dev / config /
export default defineConfig({
	plugins: [
		liveDesigner({
			tailwindcss: {
				configPath: "tailwind.config.ts",
				cssPath: "@/assets/css/tailwind.css",
				restartOnConfigUpdate: true,
				restartOnThemeUpdate: true,
			},
		}),
		Unocss({
			presets: [
				presetIcons({
					prefix: "i-", // default prefix, do not change
				}),
			],
			content: {
				pipeline: {
					/* Please ensure that you update the filenames and paths to accurately match those used in your project. */
					include: ["./src/**/*"],
				},
			},
		}),
		vue(),
		vueJsx(),
		vueDevTools(),
		nightwatchPlugin(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"~": fileURLToPath(new URL("./src", import.meta.url)),
			"~~": fileURLToPath(new URL("./", import.meta.url)),
		},
	},
});
