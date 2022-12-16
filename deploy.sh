echo "Bulding app..."

npm run build

echo "Deploying file to server..."

scp -r build/* caspian@172.105.110.38:/home/caspian/shop-user

echo "Done!"