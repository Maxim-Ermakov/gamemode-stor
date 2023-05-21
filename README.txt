Создаем виртуальное окружение
python -m venv venv

Активируем виртуальное окружение
venv\scripts\activate

Обновляем пакетный менеджер
python -m pip install --upgrade pip 

устанввливаем фреймворк
pip install django

создаем проект
django-admin startproject store_project

переходим в папку store_project
cd store_project

создаем приложение
python manage.py startapp store

подключаем базу данных
python manage.py migrate

запуск сервера
python manage.py runserver

при изменении структуры базы данных
python manage.py makemigrations
python manage.py migrate

регаем  админа
python manage.py createsuperuser

работа с изображениями
python -m pip install Pillow