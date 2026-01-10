import { Image, Text, View } from "react-native";

export default function () {
    return (
        <View style={{ margin: 8 }}>
            <View style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center"
            }}>
                <Image style={{ borderRadius: 100, width: 80, height: 80 }} source={{ uri: "https://mirzayogy.github.io/assets/image/snappy.png" }} />
                <View>
                    <Text style={{fontSize: 18, fontWeight: 700}}>Anu Professor</Text>
                    <Text>anu@gmail.com</Text>
                    <Text>12312121</Text>
                </View>
            </View>
        </View>
    );
}