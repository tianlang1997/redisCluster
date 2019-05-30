const redisCluster = require("./redisCluster")
const redis = require("redis")

let nodes = [
    { port: 7000, host: "127.0.0.1", addr: "172.17.0.2:6379" },
    { port: 7001, host: "127.0.0.1", addr: "172.17.0.3:6379" },
    { port: 7002, host: "127.0.0.1", addr: "172.17.0.4:6379" },
    { port: 7003, host: "127.0.0.1", addr: "172.17.0.5:6379" },
    { port: 7004, host: "127.0.0.1", addr: "172.17.0.6:6379" },
    { port: 7005, host: "127.0.0.1", addr: "172.17.0.7:6379" },

]

// var client0 = redis.createClient(7000,'127.0.0.1');
// var client1 = redis.createClient(7001,'127.0.0.1');
// var client2 = redis.createClient(7002,'127.0.0.1');
// var client3 = redis.createClient(7003,'127.0.0.1');
// var client4 = redis.createClient(7004,'127.0.0.1');
// var client5 = redis.createClient(7005,'127.0.0.1');

// client0.set('aaa','This is a value',(err,ret)=>{
//     console.log(err,ret);
// });
// client1.set('bbb','This is a value',(err,ret)=>{
//     console.log(err,ret);
// });
// client2.set('ccc','This is a value',(err,ret)=>{
//     console.log(err,ret);
// });
// client3.set('ddd','This is a value',(err,ret)=>{
//     console.log(err,ret);
// });
// client4.set('eee','This is a value',(err,ret)=>{
//     console.log(err,ret);
// });
// client5.set('fff','This is a value',(err,ret)=>{
//     console.log(err,ret);
// });
const redisClusterClient = redisCluster.NewRedisCluster(nodes)
// redisClusterClient.set("aaa","aaa")
// redisClusterClient.set("bbb","bbb")
// redisClusterClient.set("ccc","ccc")
// redisClusterClient.set("ddd","ddd")
// redisClusterClient.set("eee","eee")
// redisClusterClient.set("fff","fff")
redisClusterClient.get("aaa", (err, ret) => {
    console.log(err, ret)
    redisClusterClient.get("bbb", (err, ret) => {
        console.log(err, ret)
        redisClusterClient.get("ccc", (err, ret) => {
            console.log(err, ret)
            redisClusterClient.get("ddd", (err, ret) => {
                console.log(err, ret)
                redisClusterClient.get("eee", (err, ret) => {
                    console.log(err, ret)
                    redisClusterClient.get("ffff", (err, ret) => {
                        console.log(err, ret)
                    })
                })
            })
        })
    })
})
