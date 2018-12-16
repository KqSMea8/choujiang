class Api extends bun.choujiangvue {
    constructor() {
        super();
        
    }
    async execute(ctx) {
        let objServiceData = new this.Services_Data_ApiData()
        
        let bsCommon = {}
        bsCommon['type'] = ctx.request.query.type || 'home';
        let data = objServiceData.getData(bsCommon);
        ctx.body = {
            data: data
        }
    }
}

module.exports = Api;