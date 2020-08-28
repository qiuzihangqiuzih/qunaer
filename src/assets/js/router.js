import  VueRouter  from  "vue-router"
// import   first  from  "../../components/first.vue"
import sign from "../../components/sign.vue"

import index from "../../components/index.vue"
import nowhol from "../../components/nowhol.vue"
import nowsale from "../../components/nowsale.vue"
import index_lt from "../../components/index_lt.vue"
import index_pt from "../../components/index_pt.vue"

import cusser from "../../components/cusser.vue"

import mine from "../../components/mine.vue"

import login from "../../components/login.vue"
import login1 from "../../components/login1.vue"
import login2 from "../../components/login2.vue"

import hotel from "../../components/hotel.vue"
import hotel1 from "../../components/hotel1.vue"
import hotel2 from "../../components/hotel2.vue"
import hotel3 from "../../components/hotel3.vue"

import holiday from "../../components/holiday.vue"
import holiday1 from "../../components/holiday1.vue"
import holiday2 from "../../components/holiday2.vue"

import buy from "../../components/buy.vue"

import scenery from "../../components/scenery.vue"

export  default new VueRouter({
    routes:[
        // {
        //     path:"/",
        //     component:first
        // }
        
        {
            path:"/",
            component:index,
        },
        {
            path:"/sign",
            component:sign
        },
        {
            path:"/cusser",
            component:cusser,
            
        },
        {
            path:"/mine",
            component:mine,
        },
        {
            path:"/login",
            component:login,
            children:[
                {
                    path:"/login1",
                    component:login1,
                },
                {
                    path:"/login2",
                    component:login2,
                },
                
            ],
                redirect:'/login1',
        },
        {
            path:"/hotel",
            component:hotel,
            children:[
                {
                    path:"/hotel1",
                    component:hotel1,
                },
                {
                    path:"/hotel2",
                    component:hotel2,
                },
                {
                    path:"/hotel3",
                    component:hotel3,
                },
            ],
        },
        {
            path:"/holiday",
            component:holiday,
            children:[
                {
                    path:"/holiday1",
                    component:holiday1,
                },
                {
                    path:"/holiday2",
                    component:holiday2,
                }
            ],
            redirect:'/holiday1',
        },
        {
            path:'/buy',
            component:buy,
        },
        {
            path:'/scenery',
            component:scenery,
        },
        
    ]
})