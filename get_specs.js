// Open a CAT product url in a browser, e.g. https://www.cat.com/en_US/products/new/equipment/off-highway-trucks/off-highway-trucks/18560286.html
// Paste below in console and run
// Get value of result variable from console

// Can reimplement using jsdom to run outside of browser: https://www.npmjs.com/package/jsdom
function get_specs() {
    let result = {}
    // Get product name
    result["name"] = $x("//h2").map(x => x.innerText).filter(x => x.includes("PRODUCT SPECIFICATIONS"))[0].split(" ").pop();
    // Get field names
    let names = $x("//table/tbody/tr/td/strong//text()").map((x) => x.data)
    // Get data in metric units
    let metric = $x("//table/tbody/tr/td/span[contains(@class, 'unit-metric')]//text()").map((x) => x.data.split(" "))
    // Get data in US units
    let us = $x("//table/tbody/tr/td/span[contains(@class, 'unit-us')]//text()").map((x) => x.data.split(" "))


    // Add to results
    let i = 0;
    for (i = 0; i < names.length; i++) {
	let us_float = parseFloat(us[i][0]);
	let metric_float = parseFloat(metric[i][0]);
	//    result[names[i]] = {"us": {"value": us[i][0], "units": us[i][1]}, "metric": {"value": metric[i][0], "units": metric[i][1]}}
	result[names[i]] = {"us": {"value": us_float, "units": us[i][1]}, "metric": {"value": metric_float, "units": metric[i][1]}}
    }

    return result;
}

var result = get_specs();
