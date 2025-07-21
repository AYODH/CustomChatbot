import json
import numpy as np
import random
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import SGD
from sklearn.preprocessing import LabelEncoder
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
import nltk

nltk.download('punkt')
nltk.download('wordnet')

# Load intents file
with open('intents.json') as file:
    intents = json.load(file)

    lemmatizer = WordNetLemmatizer()

# Preprocessing the data
words = []
classes = []
documents = []  
ignore_words = ['?', '!', '.', ',']

for intent in intents['intents']:
    for pattern in intent['patterns']:
        # Tokenize each word
        word_list = word_tokenize(pattern)
        words.extend(word_list)
        
        # Add to documents
        documents.append((word_list, intent['tag']))
        
        # Add to classes if not already present
        if intent['tag'] not in classes:
            classes.append(intent['tag'])