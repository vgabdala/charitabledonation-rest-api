export default {

    mongo: {
     	default: {
    		port: 27017
    	},
    	development: {
				db: 'charitabledonationdev',
				host: 'localhost'
    	},
    	production: {
				db: 'charitabledonation',
				host: 'localhost'
    	}
    }

}