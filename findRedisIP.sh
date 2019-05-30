#!/bin/bash
echo "">ipList
for ((i=0; i<6; i++))
do
docker inspect redis700$i | grep IPAddress |grep -E "((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" >>ipList
done
