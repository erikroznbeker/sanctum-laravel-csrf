# laravel+sanctum & react SPA

## setup and run laravel
 - cd example-app
 - composer install
 - cp .env.example .env
 - in .env
    - set up abolute path to the database.sqlite (DB_DATABASE)
    - set up SPA url for sanctum (SANCTUM_STATEFUL_DOMAINS)
 -  php artisan serve

## setup and run react
 - cd vite-project
 - npm install
 - in .env setup backend url (VITE_BACKEND_URL)
 - npm run dev
