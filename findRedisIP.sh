#!/bin/bash

echo "">clusterIP
for ((i=0; i<6; i++))
do
docker inspect redis700$i | grep IPAddress | egrep -o "([0-9]{1,3}.){3}[0-9]{1,3}" >> clusterIP
done
"redis-cli --cluster create 172.17.0.3:6379 172.17.0.4:6379 172.17.0.5:6379 172.17.0.6:6379 172.17.0.7:6379 172.17.0.8:6379 --cluster-replicas 1" >> clusterIP
echo "redis-cli --cluster create 172.17.0.3:6379 172.17.0.4:6379 172.17.0.5:6379 172.17.0.6:6379 172.17.0.7:6379 172.17.0.8:6379 --cluster-replicas 1"
