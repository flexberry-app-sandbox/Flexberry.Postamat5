docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat5/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t postamat5/app ../..
