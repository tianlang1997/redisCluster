# redisCluster
nodejs connect to redis cluster
附上docker 建立redis集群脚本

ioredis 之类的包也尝试过很多次，始终连不上redis集群，只能自己写一个，用的也是笨办法，原理如下：
  第一次随机选择一个节点进行操作，如果成功，返回结果；
  如果失败，根据返回信息，重新选择redis节点进行操作；
如果各位还有别的方法，欢迎留言
