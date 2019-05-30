const redis = require("redis")
var client = null

function NewRedisCluster(redisNodes) {
    if (!client) client = new RedisCluster(redisNodes)
    return client
}
class RedisCluster {

    constructor(redisNodes) {
        this.nodeMap = {};
        this.nodeList = [];
        var self = this;
        for (let i = 0; i < redisNodes.length; ++i) {
            (function (nodeConfig) {
                self.nodeMap[nodeConfig.addr] = redis.createClient(nodeConfig.port, nodeConfig.host);
                self.nodeList.push(self.nodeMap[nodeConfig.addr])
            })(redisNodes[i])
        }
    }



    set(key, value) {
        let index = Math.floor(Math.random() * this.nodeList.length)
        let self = this;
        this.nodeList[index].set(key, value, (err, ret) => {
            if (err) {
                if (err.code == "MOVED") {
                    let addr = err.message.split(" ")[2]
                    self.nodeMap[addr].set(key, value)
                }
            }
        })
    }

    get(key, callback) {
        let index = Math.floor(Math.random() * this.nodeList.length)
        let node = this.nodeList[index];
        let self = this;
        node.get(key, (err, ret) => {
            if (err) {
                if (err.code == "MOVED") {
                    let addr = err.message.split(" ")[2]
                    self.nodeMap[addr].get(key, (err, ret) => {
                        console.log(err, ret);
                        callback(err, ret)
                    })
                }
            } else {
                callback(err, ret)
            }
        })
    }
}

module.exports = { NewRedisCluster }
