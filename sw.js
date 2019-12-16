self.addEventListener("install",e=>{
	self.skipWaiting()
	e.waitUntil(caches.open(currentCache).then(cache=>{
		return cache.addAll([
			"/",
			"js/keyword.js",
			"js/main.js",
			"js/quote.js",
			"styles/a.css"
		])
	}))
})
self.addEventListener("fetch",e=>{
	e.respondWith(caches.match(e.request).then(response=>{
		return response||fetch(e.request).catch(()=>{})
	}).then(data=>{
		return data||new Response(null,{
			"status":502,
			"statusText":"Bad Gateway"
		})
	}))
})
self.addEventListener("activate",e=>{
	e.waitUntil(caches.keys().then(cacheNames=>{
		return Promise.all(cacheNames.map(cacheName=>{
			if(cacheName!=currentCache){
				return caches.delete(cacheName)
			}
		}))
	}))
})
