#!/bin/sh
for FILEPATH in $(find . -type f -name '*.en_US.md'); do
    # ./_example/directory/01-filename.en_US.md => _example/directory/01-filename.en_US.md
    FILEPATH=$(echo $FILEPATH | sed 's/^\.\///')

    # _example/directory/01-filename.en_US.md => example_filename
    RESOURCE_SLUG=$(echo $FILEPATH | sed 's/\/[0-9]\+-/\//g' | sed 's/^_//' | sed 's/\/.\+\//\//g'| sed 's/\.en_US\.md$//'| tr '/' '_')

    # _example/01-filename.en_US.md => example/01-filename.<lang>.md
    FILE_FILTER=$(echo $FILEPATH | sed 's/\.en_US\.md$/.<lang>.md/')

    tx add \
        --organization maproulette \
        --project mr-docs \
        --resource "$RESOURCE_SLUG" \
        --file-filter "$FILE_FILTER" \
        --type GITHUBMARKDOWN \
        $FILEPATH
done

