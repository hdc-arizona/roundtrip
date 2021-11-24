
from setuptools import setup
from codecs import open
from os import path

here = path.abspath(path.dirname(__file__))

# Get the version in a safe way
# per python docs: https://packaging.python.org/guides/single-sourcing-package-version/
version = {}
with open("./roundtrip/version.py") as fp:
    exec(fp.read(), version)


setup(
    name="roundtrip",
    version=version["__version__"],
    description="A Python library for loading JS visualizations into jupyter notebooks.",
    url="https://github.com/hdc-arizona/roundtrip",
    author="Connor Scully-Allison",
    author_email="cscullyallison@email.arizona.edu",
    license="MIT",
    keywords="",
    packages=[
        "roundtrip"
    ],
    install_requires=[
        "numpy",
        "pandas",
    ]
)