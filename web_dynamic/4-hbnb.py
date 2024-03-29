#!usr/bin/python3
"""
Script that starts a flask web application
"""

from models import State, City, Amenity, Place, storage
from flask import Flask, render_template
import uuid

app = Flask(__name__)
app.debug = True


@app.teardown_appcontext
def teardown(Exception):
    """
    remove the current SQLAlchemy Session
    """
    storage.close()


@app.route("/4-hbnb", strict_slashes=False, methods=["GET", "POST"])
def last():

    """
    /hbnb_filters: It display an HTML page like 6-index.html,
    of the project 0x01. AirBnB clone - Web static
        State, City and Amenity objects need to be loaded
        from DBStorage and sorted by name
    """    

    return render_template(
        "4-hbnb.html",
        states=storage.all(State),
        amenities=storage.all(Amenity),
        places=storage.all(Place),
        cache_id=uuid.uuid4()
    )


if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5001)
