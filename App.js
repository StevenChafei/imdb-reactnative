import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  onPress,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { EvilIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: "#212121" }}>
          <View style={styles.test}>
            <Image
              source={require("./assets/logo-imdb.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={{ fontSize: 32, color: "white" }}>Interstellar</Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
                paddingBottom: 20,
                paddingTop: 10,
              }}
            >
              2014 PG-13 2h 49min Adventure, Drama, Sci-Fi
            </Text>
          </View>

          {/* ------------ IMAGES / TEXTE / BUTTON --------------*/}
          <View>
            <View
              style={{
                display: "flex",
                // flexDirection: "row",
                borderWidth: 1,
                borderStyle: "dashed",
                display: "flex",
                marginLeft: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    display: "flex",
                    color: "white",
                    // justifyContent: "flex-end",
                  }}
                >
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
              </View>

              <View>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    backgroundColor: "#5798EE",
                    padding: 10,
                    width: 200,
                    height: 35,
                    borderRadius: 5,
                  }}
                  onPress={onPress}
                >
                  <Text style={{ color: "white" }}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>

              <View>
                <Image
                  style={{
                    display: "flex",
                    height: 180,
                    width: 120,

                    alignItems: "center",
                  }}
                  source={require("./assets/image-film.jpeg")}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          {/* ------------ NOTES --------------*/}

          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              // borderWidth: 1,
              // borderStyle: "dashed",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 25,
              marginRight: 25,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 5,
              }}
            >
              <Ionicons name="star" size={24} color="orange" />
              <Text style={{ color: "white" }}>8.6/10</Text>
              <Text
                style={{
                  fontSize: 10,
                  color: "darkgrey",
                  borderColor: "white",
                }}
              >
                1.1M
              </Text>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <EvilIcons name="star" size={30} color="white" />
              <Text style={{ color: "white", paddingTop: 10 }}>RATE THIS</Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "green",
                }}
              >
                74
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  justifyContent: "space-around",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Metascore
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: "darkgrey",
                }}
              >
                46 critic reviews
              </Text>
            </View>
          </View>

          {/* ------------BANDEAU --------------*/}

          <View
            style={{
              // borderWidth: 1,
              // borderStyle: "dashed",
              height: 18,
              backgroundColor: "black",
            }}
          ></View>

          {/* ------------ACTORS --------------*/}

          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Text
              style={{
                fontSize: 24,
                color: "white",
                marginTop: 20,
                // marginBottom: 10,
              }}
            >
              Top Billed Cast
            </Text>
          </View>

          <ScrollView
            horizontal={true}
            style={{
              marginRight: 10,
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Image
                style={{
                  marginRight: 5,
                  display: "flex",
                  height: 200,
                  width: 120,
                  alignItems: "center",
                }}
                source={require("./assets/actor1.png")}
                resizeMode="contain"
              />
              <View
                style={{
                  backgroundColor: "#414141",
                  width: 120,
                  height: 50,
                  marginTop: -11,
                  padding: 5,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 14 }}
                  numberOfLines={1}
                >
                  Matthew McConaughey
                </Text>
                <Text style={{ fontSize: 12, color: "grey" }}>Cooper</Text>
              </View>
            </View>

            <View style={{ display: "flex", flexDirection: "column" }}>
              <Image
                style={{
                  marginRight: 5,
                  display: "flex",
                  height: 200,
                  width: 120,
                  alignItems: "center",
                }}
                source={require("./assets/actor2.png")}
                resizeMode="contain"
              />
              <View
                style={{
                  backgroundColor: "#414141",
                  width: 120,
                  height: 50,
                  marginTop: -11,
                  padding: 5,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 14 }}
                  numberOfLines={1}
                >
                  Anne Hathaway
                </Text>
                <Text style={{ fontSize: 12, color: "grey" }}>Brand</Text>
              </View>
            </View>

            <View style={{ display: "flex", flexDirection: "column" }}>
              <Image
                style={{
                  marginRight: 5,
                  display: "flex",
                  height: 200,
                  width: 120,
                  alignItems: "center",
                }}
                source={require("./assets/actor3.png")}
                resizeMode="contain"
              />
              <View
                style={{
                  backgroundColor: "#414141",
                  width: 120,
                  height: 50,
                  marginTop: -11,
                  padding: 5,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 14 }}
                  numberOfLines={1}
                >
                  Jessica Chastain
                </Text>
                <Text style={{ fontSize: 12, color: "grey" }}>Murph</Text>
              </View>
            </View>

            <View style={{ display: "flex", flexDirection: "column" }}>
              <Image
                style={{
                  marginRight: 5,
                  display: "flex",
                  height: 200,
                  width: 120,
                  alignItems: "center",
                }}
                source={require("./assets/actor4.png")}
                resizeMode="contain"
              />
              <View
                style={{
                  backgroundColor: "#414141",
                  width: 120,
                  height: 50,
                  marginTop: -11,
                  padding: 5,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 14 }}
                  numberOfLines={1}
                >
                  Timothée Chalamet
                </Text>
                <Text style={{ fontSize: 12, color: "grey" }}>Tom</Text>
              </View>
            </View>
          </ScrollView>

          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Text style={{ color: "white", marginBottom: 5 }}>Director</Text>
            <Text style={{ marginBottom: 20, color: "white" }}>
              Christopher Nolan
            </Text>
          </View>

          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Text style={{ color: "white", marginBottom: 5 }}>Writers</Text>
            <Text style={{ marginBottom: 20, color: "white" }}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstblock: {
    backgroundColor: "212121",
    fontSize: 32,
  },

  logo: {
    marginTop: 20,
    height: 40,
    width: 80,
    marginLeft: 10,
    color: "white",
  },

  container: {
    flex: 1,
    backgroundColor: "212121",
    alignItems: "center",
    justifyContent: "center",
  },
});
