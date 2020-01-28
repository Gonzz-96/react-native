# Android Details

1. React Native runs only with Java 8. To install it in your mac, use:

```
brew tap adoptopenjdk/openjdk
brew cask install adoptopenjdk8
```

2. You must set the following environment variables:

```
JAVA_HOME
PATH # Update this with JAVA_HOME
ANDROID_SDK_ROOT # Usually located in /Users/{user_name}/Library/Android/sdk
```

3. You must run an android emulator

```
$ emulator -avd <avd-name>
```

# iOS Details

If you are having this error:

```
[!] /bin/bash -c
set -e
#!/bin/bash
set -e

PLATFORM_NAME="${PLATFORM_NAME:-iphoneos}"
CURRENT_ARCH="${CURRENT_ARCH:-armv7}"

export CC="$(xcrun -find -sdk $PLATFORM_NAME cc) -arch $CURRENT_ARCH -isysroot $(xcrun -sdk $PLATFORM_NAME --show-sdk-path)"
export CXX="$CC"

# Remove automake symlink if it exists
if [ -h "test-driver" ]; then
    rm test-driver
fi

./configure --host arm-apple-darwin

# Fix build for tvOS
cat << EOF >> src/config.h

/* Add in so we have Apple Target Conditionals */
#ifdef __APPLE__
#include <TargetConditionals.h>
#include <Availability.h>
#endif

/* Special configuration for AppleTVOS */
#if TARGET_OS_TV
#undef HAVE_SYSCALL_H
#undef HAVE_SYS_SYSCALL_H
#undef OS_MACOSX
#endif

/* Special configuration for ucontext */
#undef HAVE_UCONTEXT_H
#undef PC_FROM_UCONTEXT
#if defined(__x86_64__)
#define PC_FROM_UCONTEXT uc_mcontext->__ss.__rip
#elif defined(__i386__)
#define PC_FROM_UCONTEXT uc_mcontext->__ss.__eip
#endif
EOF

checking for a BSD-compatible install... /usr/bin/install -c
checking whether build environment is sane... yes
checking for arm-apple-darwin-strip... no
checking for strip... strip
checking for a thread-safe mkdir -p... ./install-sh -c -d
checking for gawk... no
checking for mawk... no
checking for nawk... no
checking for awk... awk
checking whether make sets $(MAKE)... yes
checking whether make supports nested variables... yes
checking for arm-apple-darwin-gcc... /Library/Developer/CommandLineTools/usr/bin/cc -arch armv7 -isysroot
checking whether the C compiler works... no
xcrun: error: SDK "iphoneos" cannot be located
xcrun: error: SDK "iphoneos" cannot be located
xcrun: error: SDK "iphoneos" cannot be located
xcrun: error: unable to lookup item 'Path' in SDK 'iphoneos'
/Users/ozan/Library/Caches/CocoaPods/Pods/External/glog/f09d6cdb8398b4922e87d51f5245de7e-1de0b/missing: Unknown `--is-lightweight' option
Try `/Users/ozan/Library/Caches/CocoaPods/Pods/External/glog/f09d6cdb8398b4922e87d51f5245de7e-1de0b/missing --help' for more information
configure: WARNING: 'missing' script is too old or missing
configure: error: in `/Users/ozan/Library/Caches/CocoaPods/Pods/External/glog/f09d6cdb8398b4922e87d51f5245de7e-1de0b':
configure: error: C compiler cannot create executables
See `config.log' for more details


[!] Automatically assigning platform `ios` with version `8.0` on target `BelgradRehberi` because no platform was specified. Please specify a platform for this target in your Podfile. See `https://guides.cocoapods.org/syntax/podfile.html#platform`.
```

Please run this command in the <REACT_NATIVE_PROJECT_LOCATION>/ios/ folder:

```
sudo xcode-select --switch /Applications/Xcode.app
```

And try again:

```
$ pod install
```
