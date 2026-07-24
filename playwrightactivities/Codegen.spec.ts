import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('mobiles');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.locator('.a-link-normal').first().click();
  await page.goto('https://www.amazon.com/Samsung-Unlocked-Smartphone-Charging-Warranty/dp/B0G4SVV79P/ref=sr_1_1_sspa?crid=1DVV52P1GE8K7&dib=eyJ2IjoiMSJ9.gxBDjQFLj4AyISv1eeIjfLxD0AU6hOpA02rhH7JvXBDWJYf2CSXUlG-FM93TavbaHukTpjw8d6zNI18F6IwNlDugdzasYpc5IK1G4wmGOw66DF8XNjeDymqzgfPHkhrqxkrmeRy20gNukUpdbPV9Pd6bUAxLYkLOvrU4dwXNiON6kgMoPM_KuIQoGe8uNrrqh-OqHvfWdiwgOP4yi1JPFJlJi93AvuOWfOrMC4_Uc7tGykHfKyw2DvFyBaMF1AdifB49GUrLIW1UopOxPzlDEG_3z5yhcOs1ytxySQcttFo.j9yvOufsPtCAccWm1bnPepyh-AVgUZnFKyZrMTtayQ4&dib_tag=se&keywords=mobiles&qid=1784796934&sprefix=mobile%2Caps%2C393&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
  await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
});