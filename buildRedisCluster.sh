#!/bin/bash
for ((i=0; i<6; i++))
do
docker run --name redis700$i -p 700$i:6379 -d redis redis-server --appendonly yes --protected-mode no --cluster-enabled yes
done
echo "find redis node ip and then build ths cluster"
echo "redis-cli --cluster create 172.17.0.2:6379 172.17.0.3:6379 172.17.0.4:6379 172.17.0.5:6379 172.17.0.6:6379 172.17.0.7:6379 --cluster-replicas 1"