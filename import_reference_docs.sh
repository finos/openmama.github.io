#!/bin/bash

# All non zero exit codes fatal
set -e

function die() {
    echo "$*" 1>&2
    exit 1
}

function generateDocs() {
    # Wipe the XML output directory
    if [ -d xml ]
    then
        rm -rf xml
    fi
    PROJECT_NAME="$1"
    INPUT_ABSOLUTE="$2"
    OUTPUT="$3"
    if [ ! -d "$OUTPUT" ]
    then
        mkdir -p "$OUTPUT"
    fi
    DOXYFILE_ABSOLUTE=$(realpath -s Doxyfile)
    OUTPUT_ABSOLUTE=$(realpath -s xml)
    INPUT_RELATIVE=$(basename "$INPUT_ABSOLUTE")
    # Generate MAMA documentation from parent directory targeting one directory deep (prevents doxygen adding absolute path to things)
    (cd "$INPUT_ABSOLUTE/.." && (cat "$DOXYFILE_ABSOLUTE" ; echo -e "PROJECT_NAME=${PROJECT_NAME}\nXML_OUTPUT=${OUTPUT_ABSOLUTE}\nINPUT=${INPUT_RELATIVE}") | doxygen -)
    doxybook2 -o ${OUTPUT} -i ./xml -t doxybook2/templates --config doxybook2/config.json
}

# We need these binaries to build documentation
which doxygen > /dev/null 2>&1 || die Could not find doxygen
which doxybook2 > /dev/null 2>&1 || die Could not find doxybook2
which dot > /dev/null 2>&1 || die Could not find dot / graphviz

# Assume OpenMAMA is relative to current directory, or first argument if not specified
export OPENMAMA_ROOT=${1:-../OpenMAMA}

echo "Using OPENMAMA_ROOT='${OPENMAMA_ROOT}'"

test -d "$OPENMAMA_ROOT" || die Could not find OPENMAMA_ROOT at path: $OPENMAMA_ROOT
test -f "Doxyfile" || die Could not find Doxyfile in current directory

# Generate MAMA documentation
generateDocs "OpenMAMA C API" "${OPENMAMA_ROOT}/mama/c_cpp/src/c/mama" "reference/mama/c"
generateDocs "OpenMAMA C++ API" "${OPENMAMA_ROOT}/mama/c_cpp/src/cpp/mama" "reference/mama/cpp"
generateDocs "OpenMAMA C# API" "${OPENMAMA_ROOT}/mama/dotnet/src/cs" "reference/mama/cs"
generateDocs "OpenMAMA Java API" "${OPENMAMA_ROOT}/mama/jni/src/main/java/com/wombat/mama" "reference/mama/java"

# Generate MAMDA documentation
generateDocs "OpenMAMDA C++ API" "${OPENMAMA_ROOT}/mamda/c_cpp/src/cpp/mamda" "reference/mamda/cpp"
generateDocs "OpenMAMDA C# API" "${OPENMAMA_ROOT}/mamda/dotnet/src/cs" "reference/mamda/cs"
generateDocs "OpenMAMDA Java API" "${OPENMAMA_ROOT}/mamda/java/src/main/java/com/wombat/mamda" "reference/mamda/java"