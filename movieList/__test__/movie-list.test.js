require('chromedriver')
const { By } = require('selenium-webdriver')
const { Builder, Capabilities } = require("selenium-webdriver")
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Cross off movie', async () => {
    await crossOffMovie(driver)
})

test('Delete movie', async () => {
    await crossOffMovie(driver)
})

test('Reveal message', async () => {
    await revealMessage(driver)
})

const crossOffMovie = async (driver) => {

    await driver.findElement(By.xpath('//button')).click()
    const movie = await driver.findElement(By.xpath('//li'))

}

const deleteMovie = async (driver) => {

    await driver.findElement(By.xpath('//button')).click()
    const movie = await driver.findElement(By.xpath('//li'))

}

const revealMessage = async (driver) => {

    await driver.findElement(By.xpath('//button')).click()
    const movie = await driver.findElement(By.xpath('//li'))

}


module.exports = {
    crossOffMovie,
    deleteMovie,
    revealMessage
}