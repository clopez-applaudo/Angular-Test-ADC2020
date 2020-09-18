import { AppPage } from "./app.po";
import { browser, by, element, logging } from "protractor";

describe("angular homepage todo list", function () {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should add a todo", function () {
    page.navigateTo();

    element(by.css(".todoInput")).sendKeys("write first protractor test");
    element(by.css(".btn-primary")).click();

    let todoList = element.all(by.css(".todo-element"));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual("write first protractor test");

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css("input")).click();
    let completedAmount = element.all(by.css(".done-true"));
    expect(completedAmount.count()).toEqual(2);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
