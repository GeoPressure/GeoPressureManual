// Refresh the GeoPressureTemplate files before a local render.
// Skipped on CI, which renders from _freeze/ without R.
if (Deno.env.get("CI")) {
  console.log("CI: skip downloading GeoPressureTemplate files");
} else {
  const { code } = await new Deno.Command("Rscript", {
    args: ["R/getGeoPressureTemplateQmd.R"],
    stdout: "inherit",
    stderr: "inherit",
  }).output();
  if (code !== 0) Deno.exit(code);
}
