document.addEventListener("DOMContentLoaded", function () {
  const publicationRows = document.querySelectorAll(".publication-row");
  const filterInfo = document.getElementById("filter-info");
  const activeFilter = document.getElementById("active-filter");
  const clearFilterBtn = document.getElementById("clear-filter");

  let selectedTags = [];

  function updateFilterDisplay() {
    if (selectedTags.length > 0) {
      activeFilter.textContent = selectedTags.join(", ");
      filterInfo.style.display = "block";
    } else {
      activeFilter.textContent = "";
      filterInfo.style.display = "none";
    }
  }

  function filterPublications() {
  if (selectedTags.length === 0) {
    publicationRows.forEach(row => row.style.display = "");
    return;
  }

  publicationRows.forEach(row => {
    const tags = row.getAttribute("data-tags").split("|");
    const matchesAny = selectedTags.some(tag => tags.includes(tag));
    row.style.display = matchesAny ? "" : "none";
  });
}

  function handleTagClick(tag) {
  tag = tag.toLowerCase();

  if (!selectedTags.includes(tag)) {
    selectedTags.push(tag);
  } else {
    selectedTags = selectedTags.filter(t => t !== tag);
  }

  updateFilterDisplay();
  filterPublications();

  // 🔽 Add this to toggle selected class on all matching tags
  document.querySelectorAll(`.pub-tags[data-tag="${tag}"]`).forEach(el => {
    el.classList.toggle("selected");
  });
}


  function clearFilter() {
  selectedTags = [];
  updateFilterDisplay();

  publicationRows.forEach(row => row.style.display = "");

  // Remove visual selection from all tags
  document.querySelectorAll(".pub-tags.selected").forEach(el => {
    el.classList.remove("selected");
  });
}

  document.querySelectorAll(".pub-tags").forEach(tagEl => {
    tagEl.style.cursor = "pointer";
    tagEl.addEventListener("click", () => {
      const tag = tagEl.getAttribute("data-tag");
      handleTagClick(tag);
    });
  });

  clearFilterBtn.addEventListener("click", clearFilter);
});
