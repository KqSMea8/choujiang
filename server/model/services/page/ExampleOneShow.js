class Services_Page_ExampleOneShow extends bun.choujiangvue{
    constructor() {
        super();
    }
    execute(bsCommon) {
        let data = new this.Services_Data_ApiData().getData(bsCommon);
        return {
            pageone: data
        };
    }
}

module.exports = Services_Page_ExampleOneShow;