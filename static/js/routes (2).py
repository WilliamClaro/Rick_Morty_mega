from flask import Flask, jsonify
import requests
import json
from flask_cors import CORS



app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    residents = json.loads(requests.get('https://rickandmortyapi.com/api/location/1').text).get('residents')
    characters = []
    for resident in residents:
        character = json.loads(requests.get(resident).text)
        if character.get("species") == "Human":
            character['episode_names'] = [json.loads(requests.get(ep).text).get('name') for ep in character.get('episode')]
            characters.append(character)
    return jsonify(characters)


app.run(host='localhost')
