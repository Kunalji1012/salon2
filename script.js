async function loadContent() {
  const response = await fetch("content.md");
  const text = await response.text();

  const sections = text.split(/^# /gm).slice(1);
  sections.forEach(section => {
    const [title, ...content] = section.split("\n");
    const el = document.getElementById(title.toLowerCase().trim());
    if (el) {
      el.innerHTML = content.join("\n");
    }
  });
}

document.addEventListener("DOMContentLoaded", loadContent);