import moment from 'moment'
let formatDate = time => {
	if(time){
		return moment(time).utcOffset(-8).format('YYYY-MM-DD HH:mm:ss')
	}
}
export { formatDate }