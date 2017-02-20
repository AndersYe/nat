let accelerometer

__weex_define__('@weex-temp/x', (__weex_require__) => {
	accelerometer = __weex_require__('@weex-module/nat/sensor/accelerometer')
})

// get
const get = (opts, cb) => {
	if (typeof opts === 'function') {
		cb = opts
		opts = {}
	}
	
	return new Promise((resolve, reject) => {
		accelerometer.get((ret) => {
			ret = ret || {}
			
			if (ret.error) {
				reject(ret.error)
				if (typeof cb === 'function') cb(ret.error, null)
			} else {
				resolve(ret)
				if (typeof cb === 'function') cb(null, ret)
			}
		})
	})
}

// watch

const watch = (opts, cb) => {
	if (typeof opts === 'function') {
		cb = opts
		opts = {}
	}

	return new Promise((resolve, reject) => {
		accelerometer.watch({
			interval: opts.interval || 100
		}, (ret) => {
			ret = ret || {}
			
			if (ret.error) {
				reject(ret.error)
				if (typeof cb === 'function') cb(ret.error, null)
			} else {
				resolve(ret)
				if (typeof cb === 'function') cb(null, ret)
			}
		})
	})
}

// clear watch

const clearWatch = (cb) => {
	return new Promise((resolve, reject) => {
		accelerometer.clearWatch((ret) => {
			ret = ret || {}
			
			if (ret.error) {
				reject(ret.error)
				if (typeof cb === 'function') cb(ret.error, null)
			} else {
				resolve(ret)
				if (typeof cb === 'function') cb(null, ret)
			}
		})
	})
}

module.exports = {
	get,
	watch,
	clearWatch
}
