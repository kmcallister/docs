initSidebarItems({"trait":[["ByteWriter","Byte writer used by encoders. In most cases this will be an owned vector of `u8`."],["Encoding","Character encoding."],["RawDecoder","Decoder converting a byte sequence into a Unicode string. This is a lower level interface, and normally `Encoding::decode` should be used instead."],["RawEncoder","Encoder converting a Unicode string into a byte sequence. This is a lower level interface, and normally `Encoding::encode` should be used instead."],["StringWriter","String writer used by decoders. In most cases this will be an owned string."]],"fn":[["decode","Determine the encoding by looking for a Byte Order Mark (BOM) and decoded a single string in memory. Return the result and the used encoding."]],"type":[["DecoderTrapFunc","A type of the bare function in `DecoderTrap` values."],["EncoderTrapFunc","A type of the bare function in `EncoderTrap` values."],["EncodingRef","A trait object using dynamic dispatch which is a sendable reference to the encoding, for code where the encoding is not known at compile-time."]],"struct":[["CodecError","Error information from either encoder or decoder."]],"enum":[["DecoderTrap","Trap, which handles decoder errors."],["EncoderTrap",""]]});