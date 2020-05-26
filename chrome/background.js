var callback = function (details) {
  console.log("hello");
};
var filter = { urls: ["<all_urls>"] };
var opt_extraInfoSpec = ["blocking", "responseHeaders"];

const handleHeadersReceived = (details) => {
  const responseHeaders = details.responseHeaders.filter(
    (e) => e.name.toLowerCase() !== "x-frame-options"
  );
  return { responseHeaders };
};

chrome.webRequest.onHeadersReceived.addListener(
  handleHeadersReceived,
  filter,
  opt_extraInfoSpec
);
