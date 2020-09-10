FROM python:3.6

WORKDIR /backend

COPY ./requirements.txt /backend/requirements.txt

RUN pip install -r requirements.txt

COPY ./app /backend/app
COPY ./migrations /backend/migrations
COPY ./run.py /backend/run.py
COPY ./run.sh /backend/run.sh

EXPOSE 5000

CMD bash run.sh
