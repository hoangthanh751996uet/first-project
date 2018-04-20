#!/bin/bash
### Getting OS Information
if [ -f /etc/lsb-release ]; then
. /etc/lsb-release
DIST=$DISTRIB_ID
DIST_VER=$DISTRIB_RELEASE
else
DIST="Unknown"
DIST_VER="Unknown"
fi
if [ -f /etc/debian_version ]; then
OS="Debian"
VER=$(cat /etc/debian_version)
elif [ -f /etc/redhat-release ]; then
OS="Red Hat"
VER=$(cat /etc/redhat-release)
elif [ -f /etc/SuSE-release ]; then
OS="SuSE"
VER=$(cat /etc/SuSE-release)
else
OS=$(uname -s)
VER=$(uname -r)
fi

#!/bin/bash

os=${OSTYPE//[0-9.-]*/}

case "$os" in
  darwin)
    echo "I'm a Mac"
    ;;

  msys)
    echo "I'm Windows using git bash"
    ;;

  linux)
    echo "I'm Linux"
    ;;
  *)

  echo "Unknown Operating system $OSTYPE"
  exit 1
esac
