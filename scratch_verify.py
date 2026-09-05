from playwright.sync_api import sync_playwright

URL = "https://portfolio-alpha-black-30.vercel.app/"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    page.set_default_timeout(45000)
    page.goto(URL, wait_until="networkidle", timeout=45000)
    page.wait_for_timeout(2200)

    page.screenshot(path="C:/Users/subha/OneDrive/Desktop/potfolio/_verify_hero.png")

    height = page.evaluate("document.body.scrollHeight")
    for i, frac in enumerate([0.35, 0.55, 0.72]):
        page.evaluate(f"window.scrollTo(0, {height * frac})")
        page.wait_for_timeout(700)
        page.screenshot(path=f"C:/Users/subha/OneDrive/Desktop/potfolio/_verify_{i}.png")

    # hover a project card to check the tilt effect visually
    page.evaluate("window.scrollTo(0, document.querySelector('#projects').offsetTop + 400)")
    page.wait_for_timeout(500)
    card = page.locator("#projects .grid > *").nth(1)
    box = card.bounding_box()
    if box:
        page.mouse.move(box["x"] + box["width"] * 0.2, box["y"] + box["height"] * 0.2)
        page.wait_for_timeout(300)
        page.screenshot(path="C:/Users/subha/OneDrive/Desktop/potfolio/_verify_tilt.png")

    browser.close()
    print("done")
