// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "AlexisayalaCapacitorMacAddress",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "AlexisayalaCapacitorMacAddress",
            targets: ["MacAddressPluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "MacAddressPluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/MacAddressPluginPlugin"),
        .testTarget(
            name: "MacAddressPluginPluginTests",
            dependencies: ["MacAddressPluginPlugin"],
            path: "ios/Tests/MacAddressPluginPluginTests")
    ]
)