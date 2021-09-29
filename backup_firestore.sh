#!/bin/bash
##############################################################################
#
#   PROCESO DE BACKUP FIRESTORE
#   Parametros:
#
##############################################################################

# ARAMETROS DE LA SHELL QUE INDICAN LA/S TABLA/S A RESPALDAR
collection_1=$1
collection_2=$2
collection_3=$3
collection_4=$4
collection_5=$5
collection_6=$6

node ./firestore/backupFirestore.js $collection_1 $collection_2 $collection_3 $collection_4 $collection_5 $collection_6