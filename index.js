// DOMCL: autohide, showFromHash, addEvent "hashchange"
document.addEventListener("DOMContentLoaded", function() {
  // Function to show the section based on the hash in the URL
  function showSectionFromHash() {
    var hash = window.location.hash.substr(1); // Get the section name without the #
    if (hash) { showSection(hash) };
  }

  // Hide all sections except the home section
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = (sections[i].id === "home") ? "block" : "none";
  }

  // Show the section from the hash in the URL
  showSectionFromHash();

  // Attach an event listener to handle hash changes
  window.addEventListener("hashchange", showSectionFromHash);

  // Attach an event listener to handle popstate (back/forward button)
  window.addEventListener("popstate", showSectionFromHash);
});

// left sidebar nav-links showSection
function showSection(sectionId) {
  // Hide all sections
  var sections = document.getElementsByClassName("section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Show the clicked section
  var targetSection = document.querySelector(".section[data-section='" + sectionId + "']");
  if (targetSection) {
    targetSection.style.display = "block";
    // Update the URL hash
    // window.location.hash = sectionId;
    // Update the URL hash without triggering another hashchange event
    history.replaceState(null, null, '#' + sectionId);
  }
}
