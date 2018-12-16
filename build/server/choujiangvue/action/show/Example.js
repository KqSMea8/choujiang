/***************************************************************************
 *
 * Copyright (c) 2018 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/

/**
 * @file Example.js
 * @extend bun.choujiangvue
 * vue应用 demo
 */

class Example extends bun.choujiangvue {
    constructor() {
        super();
        this.a = 1;
        
    }
    async execute(ctx) {
        let data = new this.Services_Data_ApiData().getData();
        // ctx.body = {
        //     data: data
        // };
        // return;
        await ctx.render('example',{
            message: 'Bunjs is ready!!',
            state: JSON.stringify(data)
        });
    }
}

module.exports = Example;