function SlideMenuView () {
    this.slideMenu = document.getElementById("slideMenu");
    this.menuButton = document.getElementById("menuButton");
    this.canOpen = false;
    this.menuButton.addEventListener("click", this.open.bind(this))
}

SlideMenuView.prototype.open = function () {
    this.canOpen = !this.canOpen;
    this.slideMenu.classList.toggle("Open", this.canOpen);
}