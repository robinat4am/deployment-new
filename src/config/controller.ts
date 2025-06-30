export function Controller() {
  const a = "Hello World";
  console.log(a);
}

Controller.prototype.ComponentSelectionPageCallback = function () {
  var page = gui.pageWidgetByObjectName("ComponentSelectionPage");
  page.addVirtualComponentToUninstall("component");
};
