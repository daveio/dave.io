#!/bin/sh

run_bun() {
	echo "🐰 Running with bun..."
	exec bun x dave.io
}

run_deno() {
	echo "🦕 Running with deno..."
	exec deno run -A npm:dave.io </dev/null
}

run_pnpm() {
	echo "📦 Running with pnpm..."
	exec pnpm dlx dave.io
}

run_npx() {
	echo "💻 Running with npx..."
	exec npx dave.io
}

run_docker() {
	echo "🐳 Running with Docker..."
	exec docker run --rm -t -e TERM=xterm-256color ghcr.io/daveio/npm:latest
}

fail() {
	echo "❌ Cannot run. You need either bun, deno, pnpm, npx, or docker."
	exit 1
}

if command -v bun >/dev/null 2>&1; then
	run_bun
elif command -v deno >/dev/null 2>&1; then
	run_deno
elif command -v pnpm >/dev/null 2>&1; then
	run_pnpm
elif command -v npx >/dev/null 2>&1; then
	run_npx
elif command -v docker >/dev/null 2>&1; then
	run_docker
else
	fail
fi
