module.exports = {
	"domains": ["g.alicdn.com"],
	"mockIds": [],
	"projectIds": ["4", "6", "7", "8", "9"],
	"rules": [{
		"route": "/mockJSON",
		"json": "jsonfile.json"
	}, {
		"route": "/mockFile",
		"file": "file.html"
	}, {
		"route": "/mockJsData",
		"jsdata": "jsdata.js"
	}, {
		"route": "/product/getProductRights.do",
		// "remote": "http://30.7.0.202:7001/product/getProductRights.do",
		"json": "getProductRights.json"
	}, {
		"route": "/product/getCorpProducts.do",
		"json": "getCorpProducts.json"
		// "remote": "http://30.7.0.202:7001/product/getCorpProducts.do",
	}, {
		"route": "/product/getMarketPlanForm.do",
		"json": "getMarketPlanForm.json"
		// "remote": "http://30.7.0.202:7001/product/getMarketPlanForm.do"
	}, 
	// 获取之前的计划的列表
	{
		"route": "/product/getMarketPlan.do",
		"json": "getMarketPlan.json"
	}, {
		"route": "/ju/seal/0.1.1/??vendor.js,pages/sellerIndex/index.js",
		"remote": "http://localhost:9112/build/pages/plan-create/index.js"
	}, {
		"route": /(.*)/ig,
		// "host": "localhost",
		// "json": "http://localhost:9"
		"remote": "http://localhost:9112$0"
	}],
	"mockDir": "../mock",
	"projectIdsStr": "4,6,7,8, 9",
	"domainsStr": "g.alicdn.com"
}