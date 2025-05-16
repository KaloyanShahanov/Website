from flask import Flask, jsonify
from flask_cors import CORS  # Allows React to talk to Flask

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

@app.route('/api/hello')
def hello():
    return jsonify(message="Hello from Invincible!")

if __name__ == '__main__':
    app.run(debug=True)

