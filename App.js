import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, ScrollView } from 'react-native';
import firebase from './firebase';

const App = () => {
  const [dadosForm, setDadosForm] = useState({
    nome: '',
    email: '',
    marca: '',
    calcado: '',
    vestuario: '',
  });
  const [listaProdutos, setListaProdutos] = useState([]);
  const [mensagemErro, setMensagemErro] = useState('');

  const databaseRef = firebase.database().ref('produtos');
  
  useEffect(() => {
    databaseRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const produtosArray = Object.entries(data).map(([id, value]) => ({ id, ...value }));
        setListaProdutos(produtosArray);
      }
    });
  }, [databaseRef]);

  const handleChange = (field, value) => {
    setDadosForm({
      ...dadosForm,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    if (Object.values(dadosForm).some((value) => !value)) {
      setMensagemErro('Todos os campos devem ser preenchidos!');
      return;
    }

    if (
      listaProdutos.some(
        (product) =>
          product.nome === dadosForm.nome &&
          product.email === dadosForm.email
      )
    ) {
      setMensagemErro('Produto já cadastrado nesse estabelecimento!');
      return;
    }
    databaseRef.push(dadosForm);
    
    setListaProdutos([...listaProdutos, dadosForm]);
    setDadosForm({
      nome: '',
      email: '',
      marca: '',
      calcado: '',
      vestuario: '',
    });
    setMensagemErro('');
  };

  const handleDelete = (productId) => {
  databaseRef.child(productId).remove()
    .then(() => {
      setListaProdutos(listaProdutos.filter(item => item.id !== productId));
    })
    .catch(error => {
      console.error("Erro ao excluir do Firebase: ", error);
    });
};

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text>{item.nome}, {item.email}, {item.marca}, {item.calcado}, {item.vestuario}</Text>
      <Button title="Excluir" color="#003761" onPress={() => handleDelete(item.id)} />
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Formulário de Cadastro - Encontre aqui</Text>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={dadosForm.nome}
            onChangeText={(value) => handleChange('nome', value)}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={dadosForm.email}
            onChangeText={(value) => handleChange('email', value)}
          />

          <Text style={styles.label}>Marca favorita:</Text>
          <TextInput
            style={styles.input}
            value={dadosForm.marca}
            onChangeText={(value) => handleChange('marca', value)}
          />

          <Text style={styles.label}>Numeração de calçado:</Text>
          <TextInput
            style={styles.input}
            value={dadosForm.calcado}
            onChangeText={(value) => handleChange('calcado', value)}
          />

          <Text style={styles.label}>Tamanho de vestuário:</Text>
          <TextInput
            style={styles.input}
            value={dadosForm.vestuario}
            onChangeText={(value) => handleChange('vestuario', value)}
          />


          <Button title="Enviar" onPress={handleSubmit}  color="#003761" />
          {mensagemErro && <Text style={styles.errorText}>{mensagemErro}</Text>}
        </View>

        <View style={styles.productListContainer}>
          <Text style={styles.title}>Informações registradas:</Text>
          <FlatList
            data={listaProdutos}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#th813a',
    marginBottom: 16,
  },
  formContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003761',
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: '#th813a',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    
  },
  errorText: {
    color: 'red',
    marginTop: 8,
  },
  productListContainer: {
    flex: 1,
  },
  productItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#d58500',
    marginBottom: 8,
  },
});

export default App;


