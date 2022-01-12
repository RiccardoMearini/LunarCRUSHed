from setuptools import find_packages, setup

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="lunarcrushed",
    version="0.2.2",
    description="Generate an API key for LunarCRUSH.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    author="Nouun",
    author_email="me@nouun.dev",
    license="GNU-3.0-or-later",
    packages=find_packages("src"),
    package_dir={"": "src"},
    url="https://github.com/nouun/lunarcrushed/tree/python",
    project_urls={
        "Bug Tracker": "https://github.com/nouun/lunarcrushed/issues",
    },
    keywords="lunarcrush crypto",
    install_requires=["requests"],
)
